package lt.ocirama.labsystem.repositories;


import lt.ocirama.labsystem.model.entities.UserEntity;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface UserRepository extends Repository<UserEntity, Integer> {

    UserEntity findOneByName(String name);

    List<UserEntity> findAll();

    UserEntity findOneById(Integer id);

    UserEntity save(UserEntity userEntity);

    void deleteById(Integer id);

    Boolean existsByUsername(String username);

    UserEntity findOneByUsername(String username);

}
