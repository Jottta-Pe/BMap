
package br.com.bmap.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "LOCAIS")
public class Local {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_LOCAL")
    private Long idLocal;

    @Column(name = "NOME", nullable = false, length = 150)
    private String nome;

    @Column(name = "CATEGORIA", nullable = false, length = 80)
    private String categoria;

    @Column(name = "ENDERECO", nullable = false, length = 255)
    private String endereco;

    @Column(name = "LATITUDE", precision = 10, scale = 7)
    private java.math.BigDecimal latitude;

    @Column(name = "LONGITUDE", precision = 10, scale = 7)
    private java.math.BigDecimal longitude;

    @Column(name = "DESCRICAO", columnDefinition = "TEXT")
    private String descricao;

    public Long getIdLocal() {
        return idLocal;
    }

    public void setIdLocal(Long idLocal) {
        this.idLocal = idLocal;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public java.math.BigDecimal getLatitude() {
        return latitude;
    }

    public void setLatitude(java.math.BigDecimal latitude) {
        this.latitude = latitude;
    }

    public java.math.BigDecimal getLongitude() {
        return longitude;
    }

    public void setLongitude(java.math.BigDecimal longitude) {
        this.longitude = longitude;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
