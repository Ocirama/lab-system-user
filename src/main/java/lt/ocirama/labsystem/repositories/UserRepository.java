package lt.ocirama.labsystem.repositories;


import lt.ocirama.labsystem.model.entities.ResultEntity;
import lt.ocirama.labsystem.model.entities.UserEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface UserRepository extends Repository<UserEntity, Integer> {

    UserEntity findOneByName(String name);

    List<UserEntity> findAll();

    @Query("select ue from UserEntity ue where ue.username=:username")
    UserEntity findByUsername(String username);

    UserEntity findOneById(Integer id);

    UserEntity save(UserEntity userEntity);

    void deleteById(Integer id);

    Boolean existsByUsername(String username);

    UserEntity findOneByUsername(String username);

}
