
<?php

$target_dir = 'uploads/';
$target_file = $target_dir . basename($_FILES['user-files']['name']);

echo '<pre>';
if (move_uploaded_file($_FILES['user-files']['tmp_name'], $target_file)) {
    echo "El fichero es valido y se subio con exito.\n";
} else {
    echo "¡Error en la subida de ficheros!\n";
}

echo 'Mas informacion de depuracion:';
print_r($_FILES);

print "</pre>";

?>
