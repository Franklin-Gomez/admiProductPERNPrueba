import { Table , Column , Model , HasMany, DataType , Default } from "sequelize-typescript";

@Table({
    tableName: 'Prueba'    
})

class Prueba extends Model { 
    @Column({
        type : DataType.STRING(100)
    })
    declare name : string
    

    @Column({
        type : DataType.FLOAT
    })
    declare price : number

    @Default(true)  
    @Column({
        type : DataType.BOOLEAN
    })
    declare availability : boolean
}

export default Prueba