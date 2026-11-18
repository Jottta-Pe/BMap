
package br.com.bmap.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.bmap.bo.LocalRecursoBO;
import br.com.bmap.dto.LocalRecursoDTO;
import br.com.bmap.dto.LocalRecursoRequestDTO;
import br.com.bmap.mapper.LocalRecursoMapper;
import br.com.bmap.model.LocalRecurso;

@RestController
@RequestMapping("/local-recursos")
@CrossOrigin(origins = "*")
public class LocalRecursoController {

    private final LocalRecursoBO localRecursoBO;

    public LocalRecursoController(LocalRecursoBO localRecursoBO) {
        this.localRecursoBO = localRecursoBO;
    }

    @GetMapping
    public ResponseEntity<List<LocalRecursoDTO>> listarTodos() {
        List<LocalRecursoDTO> recursos = localRecursoBO.listarTodos()
                .stream()
                .map(LocalRecursoMapper::toDTO)
                .toList();

        return ResponseEntity.ok(recursos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<LocalRecursoDTO> buscarPorId(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                LocalRecursoMapper.toDTO(localRecursoBO.buscarPorId(id))
        );
    }

    @PostMapping
    public ResponseEntity<LocalRecursoDTO> cadastrar(
            @RequestBody LocalRecursoRequestDTO request) {

        LocalRecurso recurso = converterParaEntidade(request);

        LocalRecurso salvo = localRecursoBO.salvar(
                recurso,
                request.idLocal(),
                request.idRecurso()
        );

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(LocalRecursoMapper.toDTO(salvo));
    }

    @PutMapping("/{id}")
    public ResponseEntity<LocalRecursoDTO> atualizar(
            @PathVariable Long id,
            @RequestBody LocalRecursoRequestDTO request) {

        LocalRecurso recurso = localRecursoBO.buscarPorId(id);

        atualizarDados(recurso, request);

        LocalRecurso atualizado = localRecursoBO.salvar(
                recurso,
                request.idLocal(),
                request.idRecurso()
        );

        return ResponseEntity.ok(LocalRecursoMapper.toDTO(atualizado));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        localRecursoBO.excluir(id);
        return ResponseEntity.noContent().build();
    }

    private LocalRecurso converterParaEntidade(
            LocalRecursoRequestDTO request) {

        LocalRecurso recurso = new LocalRecurso();
        atualizarDados(recurso, request);
        return recurso;
    }

    private void atualizarDados(
            LocalRecurso recurso,
            LocalRecursoRequestDTO request) {

        recurso.setDisponivel(request.disponivel());
        recurso.setObservacao(request.observacao());
    }
}
