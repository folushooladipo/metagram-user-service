import {AutoIncrement, Column, CreatedAt, Model, PrimaryKey, Table, UpdatedAt} from "sequelize-typescript"

interface UserAttributes {
  id: number;
  email: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
}

interface UserCreationAttributes {
  email: string;
  passwordHash: string;
}

@Table
export class User extends Model<UserAttributes, UserCreationAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column
  public id!: number;

  @Column
  public email!: string;

  @Column
  public passwordHash!: string;

  @Column
  @CreatedAt
  public createdAt: Date = new Date();

  @Column
  @UpdatedAt
  public updatedAt: Date = new Date();

  short(): {email: string} {
    return {
      email: this.email,
    }
  }
}
