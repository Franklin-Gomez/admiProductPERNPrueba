import { Table , Column , Model , HasMany, DataType , Default } from "sequelize-typescript";

@Table({
    tableName: 'Prueba'    
})

class Prueba extends Model { 
    @Column({
        type : DataType.STRING(100)
    })
    name : string

    @Column({
        type : DataType.FLOAT
    })
    price : number

    @Default(true)  
    @Column({
        type : DataType.BOOLEAN
    })
    availability : boolean
}

export default Prueba