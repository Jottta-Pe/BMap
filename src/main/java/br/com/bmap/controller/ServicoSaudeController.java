package br.com.bmap.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.bmap.bo.ServicoSaudeBO;
import br.com.bmap.dto.ServicoSaudeDTO;
import br.com.bmap.dto.ServicoSaudeRequestDTO;
import br.com.bmap.mapper.ServicoSaudeMapper;
import br.com.bmap.model.ServicoSaude;

@RestController
@RequestMapping("/servicos-saude")
@CrossOrigin(origins = "*")
public class ServicoSaudeController {

    private final ServicoSaudeBO service;

    public ServicoSaudeController(ServicoSaudeBO service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<ServicoSaudeDTO>> listarTodos() {
        return ResponseEntity.ok(service.listarTodos().stream()
                .map(ServicoSaudeMapper::toDTO)
                .toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServicoSaudeDTO> buscarPorId(
            @PathVariable Long id) {
        return ResponseEntity.ok(
                ServicoSaudeMapper.toDTO(service.buscarPorId(id)));
    }

    @PostMapping
    public ResponseEntity<ServicoSaudeDTO> cadastrar(
            @RequestBody ServicoSaudeRequestDTO request) {

        ServicoSaude servico = converter(request);

        ServicoSaude salvo = service.salvar(servico, request.idLocal());

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ServicoSaudeMapper.toDTO(salvo));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ServicoSaudeDTO> atualizar(
            @PathVariable Long id,
            @RequestBody ServicoSaudeRequestDTO request) {

        ServicoSaude servico = service.buscarPorId(id);
        atualizarDados(servico, request);

        ServicoSaude atualizado = service.salvar(
                servico, request.idLocal());

        return ResponseEntity.ok(
                ServicoSaudeMapper.toDTO(atualizado));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        service.excluir(id);
        return ResponseEntity.noContent().build();
    }

    private ServicoSaude converter(ServicoSaudeRequestDTO request) {
        ServicoSaude servico = new ServicoSaude();
        atualizarDados(servico, request);
        return servico;
    }

    private void atualizarDados(
            ServicoSaude servico,
            ServicoSaudeRequestDTO request) {
        servico.setNome(request.nome());
        servico.setTelefone(request.telefone());
        servico.setDescricao(request.descricao());
    }
}