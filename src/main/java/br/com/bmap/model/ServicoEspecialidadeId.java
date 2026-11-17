
package br.com.bmap.model;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.Embeddable;

@Embeddable
public class ServicoEspecialidadeId implements Serializable {

    private Long servico;
    private Long especialidade;

    public ServicoEspecialidadeId() {
    }

    public ServicoEspecialidadeId(Long servico, Long especialidade) {
        this.servico = servico;
        this.especialidade = especialidade;
    }

    public Long getServico() {
        return servico;
    }

    public void setServico(Long servico) {
        this.servico = servico;
    }

    public Long getEspecialidade() {
        return especialidade;
    }

    public void setEspecialidade(Long especialidade) {
        this.especialidade = especialidade;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ServicoEspecialidadeId)) return false;
        ServicoEspecialidadeId that = (ServicoEspecialidadeId) o;
        return Objects.equals(servico, that.servico)
                && Objects.equals(especialidade, that.especialidade);
    }

    @Override
    public int hashCode() {
        return Objects.hash(servico, especialidade);
    }
}
