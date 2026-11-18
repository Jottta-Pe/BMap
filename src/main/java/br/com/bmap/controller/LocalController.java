
package br.com.bmap.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import br.com.bmap.bo.LocalBO;
import br.com.bmap.dto.LocalDTO;
import br.com.bmap.mapper.LocalMapper;
import br.com.bmap.model.Local;

@RestController
@RequestMapping("/locais")
@CrossOrigin(origins = "*")
public class LocalController {

    private final LocalBO localBO;

    public LocalController(LocalBO localBO) {
        this.localBO = localBO;
    }

    @GetMapping
    public List<LocalDTO> listarTodos() {
        return localBO.listarTodos()
                .stream()
                .map(LocalMapper::toDTO)
                .toList();
    }

    @GetMapping("/{id}")
    public LocalDTO buscarPorId(@PathVariable Long id) {
        return LocalMapper.toDTO(localBO.buscarPorId(id));
    }

    @PostMapping
    public LocalDTO cadastrar(@RequestBody Local entidade) {
        return LocalMapper.toDTO(localBO.salvar(entidade));
    }

    @PutMapping("/{id}")
    public LocalDTO atualizar(
            @PathVariable Long id,
            @RequestBody Local entidade) {

        entidade.setIdLocal(id);
        return LocalMapper.toDTO(localBO.salvar(entidade));
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id) {
        localBO.excluir(id);
    }
}
