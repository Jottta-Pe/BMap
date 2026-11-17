package br.com.bmap.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import java.time.LocalDateTime;

@Entity
@Table(name = "USUARIOS")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_USUARIO")
    private Long idUsuario;

    @Column(name = "NOME", nullable = false, length = 100)
    private String nome;

    @Column(name = "EMAIL", nullable = false, unique = true, length = 150)
private String email;

@Column(name = "SENHA_HASH", nullable = false, length = 255)
private String senhaHash;

@Column(name = "DATA_CADASTRO")
private LocalDateTime dataCadastro;

@Column(name = "STATUS", length = 1)
private String status;

public Long getIdUsuario() {
    return idUsuario;
}

public void setIdUsuario(Long idUsuario) {
    this.idUsuario = idUsuario;
}

public String getNome() {
    return nome;
}

public void setNome(String nome) {
    this.nome = nome;
}

public String getEmail() {
    return email;
}

public void setEmail(String email) {
    this.email = email;
}

public String getSenhaHash() {
    return senhaHash;
}

public void setSenhaHash(String senhaHash) {
    this.senhaHash = senhaHash;
}

public LocalDateTime getDataCadastro() {
    return dataCadastro;
}

public void setDataCadastro(LocalDateTime dataCadastro) {
    this.dataCadastro = dataCadastro;
}

public String getStatus() {
    return status;
}

public void setStatus(String status) {
    this.status = status;
}

}

