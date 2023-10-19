package mx.uv;

import static spark.Spark.*;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
        get("/",
            (request, response)->"<h1>Hola Mundo!</h1>"
        );
        get("/ruta1",
            (request, response)->"<h1>Adios Mundo!</h1>"
        );
        get("/ruta2",
            (request, response)->"<h1>Que Tal Mundo!</h1>"
        );
        get("/ruta3",
            (request, response)->"<h1>OK Mundo!</h1>"
        );

    }
}
