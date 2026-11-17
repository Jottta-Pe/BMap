package br.com.bmap.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.FetchType;


@Entity
@Table(name = "PREFERENCIAS_ACESSIBILIDADE")
public class PreferenciaAcessibilidade {

    @Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "ID_PREFERENCIA")
private Long idPreferencia;

@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "ID_USUARIO", nullable = false)
private Usuario usuario;

@Column(name = "TIPO_DEFICIENCIA", length = 80)
private String tipoDeficiencia;

@Column(name = "NECESSIDADE", nullable = false, length = 150)
private String necessidade;

@Column(name = "DESCRICAO", length = 500)
private String descricao;

public Long getIdPreferencia() {
    return idPreferencia;
}

public void setIdPreferencia(Long idPreferencia) {
    this.idPreferencia = idPreferencia;
}

public Usuario getUsuario() {
    return usuario;
}

public void setUsuario(Usuario usuario) {
    this.usuario = usuario;
}

public String getTipoDeficiencia() {
    return tipoDeficiencia;
}

public void setTipoDeficiencia(String tipoDeficiencia) {
    this.tipoDeficiencia = tipoDeficiencia;
}

public String getNecessidade() {
    return necessidade;
}

public void setNecessidade(String necessidade) {
    this.necessidade = necessidade;
}

public String getDescricao() {
    return descricao;
}

public void setDescricao(String descricao) {
    this.descricao = descricao;
}

}