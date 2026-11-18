package br.com.bmap.dto;

import java.math.BigDecimal;

public record LocalDTO(
    Long idLocal,
    String nome,
    String categoria,
    String endereco,
    BigDecimal latitude,
    BigDecimal longitude,
    String descricao
) {}
