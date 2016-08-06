<?php

namespace TwitchLurkBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class TwitchLurkController extends Controller
{
    /**
     * @Route("/")
     */
    public function frontPage()
    {
        return $this->render('TwitchLurkBundle:TwitchLurk:front.html.twig', [
            'title' => '^.^',
            #'title_icon' => '/images/testers/' . strtolower($type) . '.png',
        ]);
    }
}