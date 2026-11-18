package br.com.bmap.mapper;

import br.com.bmap.dto.ServicoSaudeDTO;
import br.com.bmap.model.ServicoSaude;

public class ServicoSaudeMapper {
    public static ServicoSaudeDTO toDTO(ServicoSaude s) {
        return new ServicoSaudeDTO(s.getIdServico(), s.getLocal().getIdLocal(),
            s.getNome(), s.getTelefone(), s.getDescricao());
    }
}
