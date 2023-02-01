<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../style/tabel.css">
</head>
<body>
    <header>
    <div>
        <h2>Tag Tabel</h2>
    </div>
    </header>
    <div class="tb">
        <h2>Tabel 1</h2>
        <table>
            <thead>
                <tr>
                    <th rowspan="2">NO</th>
                    <th rowspan="2">Nama Kota</th>
                    <th rowspan="2">Provinsi</th>
                    <th colspan="2">Lokasi</th>
                </tr>
                <tr>
                    <th>longitude</th>
                    <th>latitude</th>
                </tr>
            </thead>
            <tbody>
                
                <?php
                $no=1;
                $json_data = file_get_contents("../../data_kota.json");
                $data_kota = json_decode($json_data, true);
                if(count($data_kota) != 0){
                    foreach($data_kota as $dk){
                        ?>
                        <tr>
                            <td><?php echo $no++; ?></td>
                            <td><?php echo $dk['city'] ?></td>
                            <td><?php echo $dk['admin_name'] ?></td>
                            <td><?php echo $dk['lng'] ?></td>
                            <td><?php echo $dk['lat'] ?></td>
                            
                        </tr>
                        <?php
                    }
                }
                ?>
                
                
            </tbody>
        </table>
    </div>
    
</body>
</html>