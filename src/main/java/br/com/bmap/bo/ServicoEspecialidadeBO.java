package br.com.bmap.bo;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.bmap.dao.ServicoEspecialidadeDAO;
import br.com.bmap.dao.ServicoSaudeDAO;
import br.com.bmap.dao.EspecialidadeDAO;
import br.com.bmap.model.ServicoEspecialidade;
import br.com.bmap.model.ServicoEspecialidadeId;
import br.com.bmap.model.ServicoSaude;
import br.com.bmap.model.Especialidade;

@Service
public class ServicoEspecialidadeBO {

    private final ServicoEspecialidadeDAO servicoEspecialidadeDAO;
    private final ServicoSaudeDAO servicoDAO;
    private final EspecialidadeDAO especialidadeDAO;

    public ServicoEspecialidadeBO(
            ServicoEspecialidadeDAO servicoEspecialidadeDAO,
            ServicoSaudeDAO servicoDAO,
            EspecialidadeDAO especialidadeDAO) {

        this.servicoEspecialidadeDAO = servicoEspecialidadeDAO;
        this.servicoDAO = servicoDAO;
        this.especialidadeDAO = especialidadeDAO;
    }

    public List<ServicoEspecialidade> listarTodos() {
        return servicoEspecialidadeDAO.findAll();
    }

    public ServicoEspecialidade buscarPorId(ServicoEspecialidadeId id) {
        return servicoEspecialidadeDAO.findById(id)
                .orElseThrow(() ->
                    new RuntimeException("Relacao nao encontrada"));
    }

    public ServicoEspecialidade salvar(
            Long idServico,
            Long idEspecialidade) {

        ServicoSaude servico = servicoDAO.findById(idServico)
                .orElseThrow(() ->
                    new RuntimeException("Servico de saude nao encontrado"));

        Especialidade especialidade =
                especialidadeDAO.findById(idEspecialidade)
                        .orElseThrow(() ->
                            new RuntimeException("Especialidade nao encontrada"));

        ServicoEspecialidadeId id =
                new ServicoEspecialidadeId(idServico, idEspecialidade);

        ServicoEspecialidade relacao = new ServicoEspecialidade();
        relacao.setId(id);
        relacao.setServico(servico);
        relacao.setEspecialidade(especialidade);

        return servicoEspecialidadeDAO.save(relacao);
    }

    public void excluir(ServicoEspecialidadeId id) {
        servicoEspecialidadeDAO.delete(buscarPorId(id));
    }
}