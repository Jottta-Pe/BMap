
package br.com.bmap.model;

import java.time.LocalDateTime;

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
    name = "VALIDACOES",
    uniqueConstraints = @UniqueConstraint(
        columnNames = {"ID_RELATO", "ID_USUARIO"}
    )
)
public class Validacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_VALIDACAO")
    private Long idValidacao;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_RELATO", nullable = false)
    private RelatoAcessibilidade relato;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_USUARIO", nullable = false)
    private Usuario usuario;

    @Column(name = "TIPO_VALIDACAO", nullable = false, length = 30)
    private String tipoValidacao;

    @Column(name = "DATA_VALIDACAO")
    private LocalDateTime dataValidacao;

    public Long getIdValidacao() {
        return idValidacao;
    }

    public void setIdValidacao(Long idValidacao) {
        this.idValidacao = idValidacao;
    }

    public RelatoAcessibilidade getRelato() {
        return relato;
    }

    public void setRelato(RelatoAcessibilidade relato) {
        this.relato = relato;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public String getTipoValidacao() {
        return tipoValidacao;
    }

    public void setTipoValidacao(String tipoValidacao) {
        this.tipoValidacao = tipoValidacao;
    }

    public LocalDateTime getDataValidacao() {
        return dataValidacao;
    }

    public void setDataValidacao(LocalDateTime dataValidacao) {
        this.dataValidacao = dataValidacao;
    }
}
