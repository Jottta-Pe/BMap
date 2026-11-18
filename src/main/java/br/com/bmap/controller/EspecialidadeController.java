package br.com.bmap.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.bmap.bo.EspecialidadeBO;
import br.com.bmap.dto.EspecialidadeDTO;
import br.com.bmap.dto.EspecialidadeRequestDTO;
import br.com.bmap.mapper.EspecialidadeMapper;
import br.com.bmap.model.Especialidade;

@RestController
@RequestMapping("/especialidades")
@CrossOrigin(origins = "*")
public class EspecialidadeController {

    private final EspecialidadeBO service;

    public EspecialidadeController(EspecialidadeBO service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<EspecialidadeDTO>> listarTodos() {
        return ResponseEntity.ok(service.listarTodos().stream()
                .map(EspecialidadeMapper::toDTO)
                .toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<EspecialidadeDTO> buscarPorId(
            @PathVariable Long id) {
        return ResponseEntity.ok(
                EspecialidadeMapper.toDTO(service.buscarPorId(id)));
    }

    @PostMapping
    public ResponseEntity<EspecialidadeDTO> cadastrar(
            @RequestBody EspecialidadeRequestDTO request) {

        Especialidade especialidade = converter(request);
        Especialidade salva = service.salvar(especialidade);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(EspecialidadeMapper.toDTO(salva));
    }

    @PutMapping("/{id}")
    public ResponseEntity<EspecialidadeDTO> atualizar(
            @PathVariable Long id,
            @RequestBody EspecialidadeRequestDTO request) {

        Especialidade especialidade = service.buscarPorId(id);
        atualizarDados(especialidade, request);

        return ResponseEntity.ok(
                EspecialidadeMapper.toDTO(service.salvar(especialidade)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        service.excluir(id);
        return ResponseEntity.noContent().build();
    }

    private Especialidade converter(EspecialidadeRequestDTO request) {
        Especialidade especialidade = new Especialidade();
        atualizarDados(especialidade, request);
        return especialidade;
    }

    private void atualizarDados(
            Especialidade especialidade,
            EspecialidadeRequestDTO request) {
        especialidade.setNome(request.nome());
        especialidade.setDescricao(request.descricao());
    }
}