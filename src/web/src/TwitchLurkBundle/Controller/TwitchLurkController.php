<?php

namespace TwitchLurkBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use TwitchLurkBundle\Util\TwitchUtil;

class TwitchLurkController extends Controller
{
    /**
     * @Route("/")
     */
    public function frontPage()
    {
        return $this->render('TwitchLurkBundle:TwitchLurk:front.html.twig', [
            'title' => '^.^'
        ]);
    }

    /**
     * @Route("/request")
     */
    public function requestPage()
    {
        TwitchUtil::getStreams();

        return $this->render('TwitchLurkBundle:TwitchLurk:request.html.twig', [
            'title' => 'Request'
        ]);
    }
}