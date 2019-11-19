<?php
	require_once 'classes/usuarios.php';
	$u = new Usuario;
?>

<html lang="pt-br">
<head>
	<meta charset="utf-8">
	<title>Projeto login</title>
	<link rel="stylesheet" type="text/css" href="css/estilo.css">
</head>
<body>
	<div id="corpo-form-Cad">
	<h1>Cadastrar</h1>
	<form method="POST">
		<input type="text" name="nome" placeholder="Nome" maxlength="30">
		<input type="email" name="email" placeholder="Usuário" maxlength="40">
		<input type="password" name="senha" placeholder="Senha" maxlength="15">
		<input type="password" name="confSenha" placeholder="Confirmar Senha">
		<input type="submit" value="Cadastrar">
	</form>
</div>

<?php
//verificar se clicou no botao

if(isset($_POST['nome']))
{
	$nome = addslashes($_POST['nome']);
	$email = addslashes($_POST['email']);
	$senha = addslashes($_POST['senha']);
	$confirmarSenha = addslashes($_POST['confSenha']);
	//verficar se esta preenchido
	if(!empty($nome) && !empty($email) && !empty($senha) && !empty($confirmarSenha))
	{
		$u->conectar("projeto_login", "localhost", "root", "");
		if($u->msgErro == "")//se esta tudo ok
		{	
			if($senha == $confirmarSenha)
			{
				if($u->cadastrar($nome, $email, $senha))
				{
					?>
					<div id="msg-sucesso">
					Cadastrado com sucesso! Acesse para Entrar!
					</div>
					<?php
				}
				else
				{
					?>
					<div class="msg-erro">
					Email já cadastrado!
					</div>
					<?php
				}	
			}
			else
			{
				?>
					<div class="msg-erro">
					Senha e confirmar senha nao correspondem!
					</div>
					<?php
			}
			
		} 
		else
		{
			?>
			<div class="msg-erro">	
					<?php echo "Erro: ".$u->msgErro;?>
			</div>
			<?php
		}
	} 
	else
	{
		?>
		<div class="msg-erro">
			Preencha todos os campos!
		</div>
		<?php
		
	}
}



?>
</body>
</html>