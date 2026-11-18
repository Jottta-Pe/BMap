package br.com.bmap.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.bmap.bo.RelatoAcessibilidadeBO;
import br.com.bmap.dto.RelatoAcessibilidadeDTO;
import br.com.bmap.dto.RelatoAcessibilidadeRequestDTO;
import br.com.bmap.mapper.RelatoAcessibilidadeMapper;
import br.com.bmap.model.RelatoAcessibilidade;

@RestController
@RequestMapping("/relatos-acessibilidade")
@CrossOrigin(origins = "*")
public class RelatoAcessibilidadeController {

    private final RelatoAcessibilidadeBO service;

    public RelatoAcessibilidadeController(
            RelatoAcessibilidadeBO service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<RelatoAcessibilidadeDTO>> listarTodos() {
        List<RelatoAcessibilidadeDTO> relatos =
                service.listarTodos().stream()
                        .map(RelatoAcessibilidadeMapper::toDTO)
                        .toList();

        return ResponseEntity.ok(relatos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RelatoAcessibilidadeDTO> buscarPorId(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                RelatoAcessibilidadeMapper.toDTO(
                        service.buscarPorId(id))
        );
    }

    @PostMapping
    public ResponseEntity<RelatoAcessibilidadeDTO> cadastrar(
            @RequestBody RelatoAcessibilidadeRequestDTO request) {

        RelatoAcessibilidade relato = new RelatoAcessibilidade();

        atualizarDados(relato, request);

        RelatoAcessibilidade salvo = service.salvar(
                relato,
                request.idUsuario(),
                request.idLocal()
        );

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(RelatoAcessibilidadeMapper.toDTO(salvo));
    }

    @PutMapping("/{id}")
    public ResponseEntity<RelatoAcessibilidadeDTO> atualizar(
            @PathVariable Long id,
            @RequestBody RelatoAcessibilidadeRequestDTO request) {

        RelatoAcessibilidade relato = service.buscarPorId(id);

        atualizarDados(relato, request);

        RelatoAcessibilidade atualizado = service.salvar(
                relato,
                request.idUsuario(),
                request.idLocal()
        );

        return ResponseEntity.ok(
                RelatoAcessibilidadeMapper.toDTO(atualizado));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        service.excluir(id);
        return ResponseEntity.noContent().build();
    }

    private void atualizarDados(
            RelatoAcessibilidade relato,
            RelatoAcessibilidadeRequestDTO request) {

        relato.setDescricao(request.descricao());
        relato.setDataRelato(request.dataRelato());
        relato.setStatus(request.status());
    }
}