<?php

namespace TwitchLurkBundle\Util;

use Symfony\Component\VarDumper\VarDumper;

class TwitchUtil
{
    public static function getStreams()
    {
        $fetchStreamsCurl = curl_init('https://api.twitch.tv/kraken/streams?game=overwatch&language=de');
        curl_setopt($fetchStreamsCurl, CURLOPT_RETURNTRANSFER, 1);
        $jsonData = curl_exec($fetchStreamsCurl);
        $streams = json_decode($jsonData);
        VarDumper::dump($streams);
    }
}