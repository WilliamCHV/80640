import { Button, TextField, Box } from "@mui/material";
//import React, {useEffect, useState} from "react";
import { useState } from "react";
import axios from "axios";

function Formulario(props){
    const [Cargando, setCargando] = useState(false)
    const [datosFormulario, setDatosFormulario] = useState(
        {nombre: '',
        password: ''}
    )
    const hacerPeticion = async () => {
        try{
            const response = await axios.get('http://localhost:4567')
            console.log(response)
            return response.data
        }catch (error) {
            throw error
        }
    }
    const procesarFormulario = async ( evento ) => {
        evento.preventDefault
        console.log("dator recuperados del formulario", datosFormulario)
        setCargando(true)
        try{
            const response = await hacerPeticion()
            //console.log(response)
            setCargando(false)
            //valida los datos del fomulario contra lo del backend
            if (datosFormulario.nombre === response.username) {
                console.log('Ok el usuario es correcto')
            }else{
                console.log('error el usuario es incorrecto')
            }
            //const response = hacerPeticion()
        }catch (error){
            console.log('error', error)
            setCargando(false)
        }
    }
    const cambiosFormulario = (e) => {
        // console.log(event.target)
        const {name, value} = event.target
        setDatosFormulario ({ ...datosFormulario, [name]:value})
    }
    return(
        <>
            <form onSubmit={ procesarFormulario }>
                <h1>Inicio de sesión</h1>
                {/* <form onSubmit= { procesarFormulario }> */}
                    <Box m={5}>
                        <TextField label="Nombre:" variant="outlined" fullWidth onChange={cambiosFormulario} name="nombre" value={datosFormulario.nombre}></TextField>
                    </Box>
                    <Box m={5}>
                        <TextField label="Contraseña:" variant="outlined" type="password" fullWidth onChange={cambiosFormulario} name="password" value={datosFormulario.password}></TextField>
                    </Box>
                    <Box m={5}>
                        <Button variant="contained" type="submit" color="primary" fullWidth disable={Cargando} >Iniciar Sesion</Button>
                    </Box>
            </form>
        </>
    )
}

export default Formulario