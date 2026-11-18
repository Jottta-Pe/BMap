package br.com.bmap.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.bmap.bo.ValidacaoBO;
import br.com.bmap.dto.ValidacaoDTO;
import br.com.bmap.dto.ValidacaoRequestDTO;
import br.com.bmap.mapper.ValidacaoMapper;
import br.com.bmap.model.Validacao;

@RestController
@RequestMapping("/validacoes")
@CrossOrigin(origins = "*")
public class ValidacaoController {

    private final ValidacaoBO service;

    public ValidacaoController(ValidacaoBO service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<ValidacaoDTO>> listarTodos() {
        List<ValidacaoDTO> validacoes = service.listarTodos()
                .stream()
                .map(ValidacaoMapper::toDTO)
                .toList();

        return ResponseEntity.ok(validacoes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ValidacaoDTO> buscarPorId(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                ValidacaoMapper.toDTO(service.buscarPorId(id)));
    }

    @PostMapping
    public ResponseEntity<ValidacaoDTO> cadastrar(
            @RequestBody ValidacaoRequestDTO request) {

        Validacao validacao = new Validacao();
        atualizarDados(validacao, request);

        Validacao salva = service.salvar(
                validacao,
                request.idRelato(),
                request.idUsuario());

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ValidacaoMapper.toDTO(salva));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ValidacaoDTO> atualizar(
            @PathVariable Long id,
            @RequestBody ValidacaoRequestDTO request) {

        Validacao validacao = service.buscarPorId(id);
        atualizarDados(validacao, request);

        Validacao atualizada = service.salvar(
                validacao,
                request.idRelato(),
                request.idUsuario());

        return ResponseEntity.ok(
                ValidacaoMapper.toDTO(atualizada));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        service.excluir(id);
        return ResponseEntity.noContent().build();
    }

    private void atualizarDados(
            Validacao validacao,
            ValidacaoRequestDTO request) {

        validacao.setTipoValidacao(request.tipoValidacao());
        validacao.setDataValidacao(request.dataValidacao());
    }
}