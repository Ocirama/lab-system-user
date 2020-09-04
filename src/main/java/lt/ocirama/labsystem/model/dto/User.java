package lt.ocirama.labsystem.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class User {
    private Integer id;
    private String name;
    private String username;
    private String role;
    private String password;
}

