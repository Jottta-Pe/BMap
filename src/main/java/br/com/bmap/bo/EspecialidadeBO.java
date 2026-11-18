package br.com.bmap.bo;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.bmap.dao.EspecialidadeDAO;
import br.com.bmap.model.Especialidade;

@Service
public class EspecialidadeBO {

    private final EspecialidadeDAO especialidadeDAO;

    public EspecialidadeBO(EspecialidadeDAO especialidadeDAO) {
        this.especialidadeDAO = especialidadeDAO;
    }

    public List<Especialidade> listarTodos() {
        return especialidadeDAO.findAll();
    }

    public Especialidade buscarPorId(Long id) {
        return especialidadeDAO.findById(id)
                .orElseThrow(() ->
                    new RuntimeException("Especialidade nao encontrada"));
    }

    public Especialidade salvar(Especialidade especialidade) {
        return especialidadeDAO.save(especialidade);
    }

    public void excluir(Long id) {
        especialidadeDAO.delete(buscarPorId(id));
    }
}