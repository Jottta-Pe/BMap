
package br.com.bmap.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.bmap.bo.TipoRecursoBO;
import br.com.bmap.dto.TipoRecursoDTO;
import br.com.bmap.dto.TipoRecursoRequestDTO;
import br.com.bmap.mapper.TipoRecursoMapper;
import br.com.bmap.model.TipoRecurso;

@RestController
@RequestMapping("/tipos-recursos")
@CrossOrigin(origins = "*")
public class TipoRecursoController {

    private final TipoRecursoBO tipoRecursoBO;

    public TipoRecursoController(TipoRecursoBO tipoRecursoBO) {
        this.tipoRecursoBO = tipoRecursoBO;
    }

    @GetMapping
    public ResponseEntity<List<TipoRecursoDTO>> listarTodos() {
        List<TipoRecursoDTO> tipos = tipoRecursoBO.listarTodos()
                .stream()
                .map(TipoRecursoMapper::toDTO)
                .toList();

        return ResponseEntity.ok(tipos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TipoRecursoDTO> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(
                TipoRecursoMapper.toDTO(tipoRecursoBO.buscarPorId(id))
        );
    }

    @PostMapping
    public ResponseEntity<TipoRecursoDTO> cadastrar(
            @RequestBody TipoRecursoRequestDTO request) {

        TipoRecurso tipo = converterParaEntidade(request);
        TipoRecurso salvo = tipoRecursoBO.salvar(tipo);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(TipoRecursoMapper.toDTO(salvo));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TipoRecursoDTO> atualizar(
            @PathVariable Long id,
            @RequestBody TipoRecursoRequestDTO request) {

        TipoRecurso tipo = tipoRecursoBO.buscarPorId(id);
        atualizarDados(tipo, request);

        TipoRecurso atualizado = tipoRecursoBO.salvar(tipo);

        return ResponseEntity.ok(TipoRecursoMapper.toDTO(atualizado));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        tipoRecursoBO.excluir(id);
        return ResponseEntity.noContent().build();
    }

    private TipoRecurso converterParaEntidade(TipoRecursoRequestDTO request) {
        TipoRecurso tipo = new TipoRecurso();
        atualizarDados(tipo, request);
        return tipo;
    }

    private void atualizarDados(TipoRecurso tipo, TipoRecursoRequestDTO request) {
        tipo.setNome(request.nome());
        tipo.setDescricao(request.descricao());
    }
}
