<!doctype html>
<html lang="pt-br">
  <head>
    <title>Enviar Email</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <style>.disclaimer {display: none !important;}</style>

    <!-- Bootstrap CSS v5.0.2 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <style>
        body {
          height: 100vh;
        }
        .btn {
            border-bottom: 5px solid #0d3ca5;
        }
    </style>
  </head>
  <body>
      <div class="container">
          <div class="d-flex flex-column mt-4 mb-5">
                <img class="mx-auto" src="logo.png" alt="seta azul"  width="72px" height="72px">
                <h1 class="mx-auto mb-0">Send Email</h1>
                <p class="mx-auto fs-5">Seu app de envio de e-mails particular favorito!</p>
          </div>

          <div>
              <form action="form.php" method="POST">
                <label for="email-destino">Para</label>
                <input type="email" name="email-destino" class="form-control" placeholder="flavindopneu@hotmail.com">

                <label for="assunto" class="mt-2">Assunto</label>
                <input type="text" name="assunto" class="form-control">

                <label for="mensagem" class="mt-2">Mensagem</label>
                <textarea name="mensagem" class="form-control"></textarea>

                <input class="btn btn-primary w-100 mt-3" type="submit" name="enviar" id="enviar" value="Enviar">
              </form>
          </div>
      </div>

      <footer>
        <p class="text-center" style="color: rgba(110, 108, 108, 0.801);">Tiagol09 - Todos os direitos reservados</p>
      </footer>

      
    <!-- Bootstrap JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
  </body>
</html>