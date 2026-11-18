
package br.com.bmap.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.bmap.bo.UsuarioBO;
import br.com.bmap.dto.UsuarioDTO;
import br.com.bmap.dto.UsuarioRequestDTO;
import br.com.bmap.mapper.UsuarioMapper;
import br.com.bmap.model.Usuario;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {

    private final UsuarioBO usuarioBO;

    public UsuarioController(UsuarioBO usuarioBO) {
        this.usuarioBO = usuarioBO;
    }

    @GetMapping
    public ResponseEntity<List<UsuarioDTO>> listarTodos() {
        List<UsuarioDTO> usuarios = usuarioBO.listarTodos()
                .stream()
                .map(UsuarioMapper::toDTO)
                .toList();

        return ResponseEntity.ok(usuarios);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UsuarioDTO> buscarPorId(@PathVariable Long id) {
        Usuario usuario = usuarioBO.buscarPorId(id);

        return ResponseEntity.ok(UsuarioMapper.toDTO(usuario));
    }

    @PostMapping
    public ResponseEntity<UsuarioDTO> cadastrar(
            @RequestBody UsuarioRequestDTO request) {

        Usuario usuario = new Usuario();

        usuario.setNome(request.nome());
        usuario.setEmail(request.email());
        usuario.setSenhaHash(request.senha());
        usuario.setStatus(request.status());

        Usuario salvo = usuarioBO.cadastrar(usuario);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(UsuarioMapper.toDTO(salvo));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UsuarioDTO> atualizar(
            @PathVariable Long id,
            @RequestBody UsuarioRequestDTO request) {

        Usuario usuario = usuarioBO.buscarPorId(id);

        usuario.setNome(request.nome());
        usuario.setEmail(request.email());
        usuario.setStatus(request.status());

        Usuario atualizado = usuarioBO.atualizar(usuario, request.senha());

        return ResponseEntity.ok(UsuarioMapper.toDTO(atualizado));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        usuarioBO.excluir(id);

        return ResponseEntity.noContent().build();
    }
}
