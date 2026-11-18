package br.com.bmap.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.bmap.bo.ServicoEspecialidadeBO;
import br.com.bmap.dto.ServicoEspecialidadeDTO;
import br.com.bmap.dto.ServicoEspecialidadeRequestDTO;
import br.com.bmap.mapper.ServicoEspecialidadeMapper;
import br.com.bmap.model.ServicoEspecialidadeId;

@RestController
@RequestMapping("/servico-especialidades")
@CrossOrigin(origins = "*")
public class ServicoEspecialidadeController {

    private final ServicoEspecialidadeBO bo;

    public ServicoEspecialidadeController(ServicoEspecialidadeBO bo) {
        this.bo = bo;
    }

    @GetMapping
    public ResponseEntity<List<ServicoEspecialidadeDTO>> listarTodos() {
        return ResponseEntity.ok(bo.listarTodos().stream()
                .map(ServicoEspecialidadeMapper::toDTO)
                .toList());
    }

    @GetMapping("/{idServico}/{idEspecialidade}")
    public ResponseEntity<ServicoEspecialidadeDTO> buscarPorId(
            @PathVariable Long idServico,
            @PathVariable Long idEspecialidade) {

        ServicoEspecialidadeId id =
                new ServicoEspecialidadeId(idServico, idEspecialidade);

        return ResponseEntity.ok(
                ServicoEspecialidadeMapper.toDTO(bo.buscarPorId(id)));
    }

    @PostMapping
    public ResponseEntity<ServicoEspecialidadeDTO> cadastrar(
            @RequestBody ServicoEspecialidadeRequestDTO request) {

        var relacao = bo.salvar(
                request.idServico(),
                request.idEspecialidade());

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ServicoEspecialidadeMapper.toDTO(relacao));
    }

    @DeleteMapping("/{idServico}/{idEspecialidade}")
    public ResponseEntity<Void> excluir(
            @PathVariable Long idServico,
            @PathVariable Long idEspecialidade) {

        bo.excluir(new ServicoEspecialidadeId(
                idServico, idEspecialidade));

        return ResponseEntity.noContent().build();
    }
}