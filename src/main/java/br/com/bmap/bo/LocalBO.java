package br.com.bmap.bo;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.bmap.dao.LocalDAO;
import br.com.bmap.model.Local;

@Service
public class LocalBO {

    private final LocalDAO localDAO;

    public LocalBO(LocalDAO localDAO) {
        this.localDAO = localDAO;
    }

    public List<Local> listarTodos() {
        return localDAO.findAll();
    }

    public Local buscarPorId(Long id) {
        return localDAO.findById(id)
                .orElseThrow(() -> new RuntimeException("Local não encontrado"));
    }

    public Local salvar(Local local) {
        return localDAO.save(local);
    }

    public void excluir(Long id) {
        Local local = buscarPorId(id);
        localDAO.delete(local);
    }
}