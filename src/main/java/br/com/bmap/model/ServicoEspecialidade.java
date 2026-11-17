
package br.com.bmap.model;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;

@Entity
@Table(name = "SERVICO_ESPECIALIDADE")
public class ServicoEspecialidade {

    @EmbeddedId
    private ServicoEspecialidadeId id;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("servico")
    @JoinColumn(name = "ID_SERVICO")
    private ServicoSaude servico;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("especialidade")
    @JoinColumn(name = "ID_ESPECIALIDADE")
    private Especialidade especialidade;

    public ServicoEspecialidadeId getId() {
        return id;
    }

    public void setId(ServicoEspecialidadeId id) {
        this.id = id;
    }

    public ServicoSaude getServico() {
        return servico;
    }

    public void setServico(ServicoSaude servico) {
        this.servico = servico;
    }

    public Especialidade getEspecialidade() {
        return especialidade;
    }

    public void setEspecialidade(Especialidade especialidade) {
        this.especialidade = especialidade;
    }
}
