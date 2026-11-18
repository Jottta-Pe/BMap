package br.com.bmap.bo;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.bmap.dao.ServicoSaudeDAO;
import br.com.bmap.dao.LocalDAO;
import br.com.bmap.model.ServicoSaude;
import br.com.bmap.model.Local;

@Service
public class ServicoSaudeBO {

    private final ServicoSaudeDAO servicoDAO;
    private final LocalDAO localDAO;

    public ServicoSaudeBO(
            ServicoSaudeDAO servicoDAO,
            LocalDAO localDAO) {
        this.servicoDAO = servicoDAO;
        this.localDAO = localDAO;
    }

    public List<ServicoSaude> listarTodos() {
        return servicoDAO.findAll();
    }

    public ServicoSaude buscarPorId(Long id) {
        return servicoDAO.findById(id)
                .orElseThrow(() ->
                    new RuntimeException("Servico de saude nao encontrado"));
    }

    public ServicoSaude salvar(
            ServicoSaude servico,
            Long idLocal) {

        Local local = localDAO.findById(idLocal)
                .orElseThrow(() ->
                    new RuntimeException("Local nao encontrado"));

        servico.setLocal(local);

        return servicoDAO.save(servico);
    }

    public void excluir(Long id) {
        servicoDAO.delete(buscarPorId(id));
    }
}