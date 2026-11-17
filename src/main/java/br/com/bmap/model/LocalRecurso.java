
package br.com.bmap.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(
    name = "LOCAL_RECURSOS",
    uniqueConstraints = {
        @UniqueConstraint(
            columnNames = {"ID_LOCAL", "ID_RECURSO"}
        )
    }
)
public class LocalRecurso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_LOCAL_RECURSO")
    private Long idLocalRecurso;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_LOCAL", nullable = false)
    private Local local;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_RECURSO", nullable = false)
    private TipoRecurso tipoRecurso;

    @Column(name = "DISPONIVEL", length = 1)
    private String disponivel;

    @Column(name = "OBSERVACAO", length = 500)
    private String observacao;

    public Long getIdLocalRecurso() {
        return idLocalRecurso;
    }

    public void setIdLocalRecurso(Long idLocalRecurso) {
        this.idLocalRecurso = idLocalRecurso;
    }

    public Local getLocal() {
        return local;
    }

    public void setLocal(Local local) {
        this.local = local;
    }

    public TipoRecurso getTipoRecurso() {
        return tipoRecurso;
    }

    public void setTipoRecurso(TipoRecurso tipoRecurso) {
        this.tipoRecurso = tipoRecurso;
    }

    public String getDisponivel() {
        return disponivel;
    }

    public void setDisponivel(String disponivel) {
        this.disponivel = disponivel;
    }

    public String getObservacao() {
        return observacao;
    }

    public void setObservacao(String observacao) {
        this.observacao = observacao;
    }
}
