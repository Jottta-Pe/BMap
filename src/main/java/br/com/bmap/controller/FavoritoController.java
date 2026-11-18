package br.com.bmap.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.bmap.bo.FavoritoBO;
import br.com.bmap.dto.FavoritoDTO;
import br.com.bmap.dto.FavoritoRequestDTO;
import br.com.bmap.mapper.FavoritoMapper;
import br.com.bmap.model.Favorito;

@RestController
@RequestMapping("/favoritos")
@CrossOrigin(origins = "*")
public class FavoritoController {

    private final FavoritoBO service;

    public FavoritoController(FavoritoBO service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<FavoritoDTO>> listarTodos() {
        return ResponseEntity.ok(service.listarTodos().stream()
                .map(FavoritoMapper::toDTO)
                .toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<FavoritoDTO> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(
                FavoritoMapper.toDTO(service.buscarPorId(id)));
    }

    @PostMapping
    public ResponseEntity<FavoritoDTO> cadastrar(
            @RequestBody FavoritoRequestDTO request) {

        Favorito favorito = new Favorito();
        favorito.setDataAdicao(request.dataAdicao());

        Favorito salvo = service.salvar(
                favorito, request.idUsuario(), request.idLocal());

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(FavoritoMapper.toDTO(salvo));
    }

    @PutMapping("/{id}")
    public ResponseEntity<FavoritoDTO> atualizar(
            @PathVariable Long id,
            @RequestBody FavoritoRequestDTO request) {

        Favorito favorito = service.buscarPorId(id);
        favorito.setDataAdicao(request.dataAdicao());

        Favorito atualizado = service.salvar(
                favorito, request.idUsuario(), request.idLocal());

        return ResponseEntity.ok(FavoritoMapper.toDTO(atualizado));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        service.excluir(id);
        return ResponseEntity.noContent().build();
    }
}