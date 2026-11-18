package br.com.bmap.dto;

public record UsuarioDTO(
    Long idUsuario,
    String nome,
    String email,
    String status
) {}
