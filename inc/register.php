<?php

require_once('../../../../wp-load.php');


$email = $_REQUEST['email'];
$name = isset($_REQUEST['author']) ? $_REQUEST['author'] : []; 	
$password = isset($_REQUEST['pass']) ? wp_generate_password( 12 ) : [];
// $tel = isset($_REQUEST['tel']) ? $_REQUEST['tel'] : [];
$site = isset($_REQUEST['url']) ? $_REQUEST['url'] : [];
// $role = isset($_REQUEST['role']) ? $_REQUEST['role'] : []; 
// $random_password = wp_generate_password( 12 );

$user = get_user_by( 'email', $email );
    if ( !$user ) {
//         $user_id = wp_create_user( $email, $random_password, $email, $name, $last_name );
		$userdata = array(
			'user_pass'       => $password, // обязательно
			'user_login'      => $email, // обязательно
			'user_nicename'   => '',
			'user_url'        => $site,
			'user_email'      => $email,
			'display_name'    => $name,
			'nickname'        => '',
			'first_name'      => $name,
			'last_name'       => '',
			'description'     => '',
			'rich_editing'    => 'true', // false - выключить визуальный редактор
			'user_registered' => '', // дата регистрации (Y-m-d H:i:s) в GMT
			'role'            => '', // (строка) роль пользователя
			'jabber'          => '',
			'aim'             => '',
			'yim'             => '',
		);
		
		$user_id = wp_insert_user( $userdata );
		// add_user_meta( $user_id, 'site', $site, true );
		// add_user_meta( $user_id, 'role', $role, true );
		// add_user_meta( $user_id, 'tel', $tel, true );


        if ( is_wp_error( $userdata ) ) {
            $data['error'] = true;
            $data['error_desc'] = $userdata->get_error_message();
        } else {
            $data['succes'] = true;
            $data['succes_desc'] = 'user_create';
            $data['user_id'] = $user_id;

						// $creds = array();
						// $creds['user_login'] = $email;
						// $creds['user_password'] = $password;
						// $creds['remember'] = true;

						// $userLog = wp_signon( $creds, false );

						// if ( is_wp_error($userLog) ) {
						//    echo $userLog->get_error_message();
						// }
            // wp_signon($userdata);
        }
    } 
    else {
        $data['error'] = true;
        $data['error_desc'] = 'email_exist';
    }

$data['req'] = $_REQUEST;

header('Content-Type: application/json');
echo(json_encode ($data));