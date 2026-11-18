package br.com.bmap.dto;

public record UsuarioRequestDTO(
    String nome,
    String email,
    String senha,
    String status
) {}
