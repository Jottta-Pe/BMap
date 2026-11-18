package br.com.bmap.dto;

import java.math.BigDecimal;

public record LocalRequestDTO(
    String nome,
    String categoria,
    String endereco,
    BigDecimal latitude,
    BigDecimal longitude,
    String descricao
) {}
