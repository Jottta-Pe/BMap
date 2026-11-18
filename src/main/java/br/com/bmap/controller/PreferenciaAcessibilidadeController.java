
package br.com.bmap.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.bmap.bo.PreferenciaAcessibilidadeBO;
import br.com.bmap.dto.PreferenciaAcessibilidadeDTO;
import br.com.bmap.dto.PreferenciaAcessibilidadeRequestDTO;
import br.com.bmap.mapper.PreferenciaAcessibilidadeMapper;
import br.com.bmap.model.PreferenciaAcessibilidade;

@RestController
@RequestMapping("/preferencias-acessibilidade")
@CrossOrigin(origins = "*")
public class PreferenciaAcessibilidadeController {

    private final PreferenciaAcessibilidadeBO service;

    public PreferenciaAcessibilidadeController(
            PreferenciaAcessibilidadeBO service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<PreferenciaAcessibilidadeDTO>> listarTodos() {
        List<PreferenciaAcessibilidadeDTO> preferencias =
                service.listarTodos().stream()
                        .map(PreferenciaAcessibilidadeMapper::toDTO)
                        .toList();

        return ResponseEntity.ok(preferencias);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PreferenciaAcessibilidadeDTO> buscarPorId(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                PreferenciaAcessibilidadeMapper.toDTO(
                        service.buscarPorId(id))
        );
    }

    @PostMapping
    public ResponseEntity<PreferenciaAcessibilidadeDTO> cadastrar(
            @RequestBody PreferenciaAcessibilidadeRequestDTO request) {

        PreferenciaAcessibilidade preferencia =
                converterParaEntidade(request);

        PreferenciaAcessibilidade salva =
                service.salvar(preferencia, request.idUsuario());

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(PreferenciaAcessibilidadeMapper.toDTO(salva));
    }

    @PutMapping("/{id}")
    public ResponseEntity<PreferenciaAcessibilidadeDTO> atualizar(
            @PathVariable Long id,
            @RequestBody PreferenciaAcessibilidadeRequestDTO request) {

        PreferenciaAcessibilidade preferencia = service.buscarPorId(id);

        atualizarDados(preferencia, request);

        PreferenciaAcessibilidade atualizada =
                service.salvar(preferencia, request.idUsuario());

        return ResponseEntity.ok(
                PreferenciaAcessibilidadeMapper.toDTO(atualizada));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        service.excluir(id);
        return ResponseEntity.noContent().build();
    }

    private PreferenciaAcessibilidade converterParaEntidade(
            PreferenciaAcessibilidadeRequestDTO request) {

        PreferenciaAcessibilidade preferencia =
                new PreferenciaAcessibilidade();

        atualizarDados(preferencia, request);

        return preferencia;
    }

    private void atualizarDados(
            PreferenciaAcessibilidade preferencia,
            PreferenciaAcessibilidadeRequestDTO request) {

        preferencia.setTipoDeficiencia(request.tipoDeficiencia());
        preferencia.setNecessidade(request.necessidade());
        preferencia.setDescricao(request.descricao());
    }
}
