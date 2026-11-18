package br.com.bmap.dto;

public record ServicoSaudeRequestDTO(
    Long idLocal,
    String nome,
    String telefone,
    String descricao
) {}