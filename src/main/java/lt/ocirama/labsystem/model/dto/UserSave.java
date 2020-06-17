package lt.ocirama.labsystem.model.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
public class UserSave {
    private String name;
    private String username;
    private String role;
    private List<ResultSave> results;
}

