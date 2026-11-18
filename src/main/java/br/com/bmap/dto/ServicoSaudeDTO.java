package br.com.bmap.dto;

public record ServicoSaudeDTO(
    Long idServico,
    Long idLocal,
    String nome,
    String telefone,
    String descricao
) {}
