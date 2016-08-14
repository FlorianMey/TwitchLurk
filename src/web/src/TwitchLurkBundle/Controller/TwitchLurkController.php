<?php

namespace TwitchLurkBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\VarDumper\VarDumper;
use TwitchLurkBundle\Util\TwitchUtil;

class TwitchLurkController extends Controller
{
    /**
     * @Route("/", defaults={"selectedSource" = "search"})
     * @Route("/from/{selectedSource}");
     */
    public function frontPage($selectedSource)
    {
        $streamSources = [
            'search'    => ['name' => 'Search', 'link' => '/'],
            'following' => ['name' => 'Following List', 'link' => '/from/following'],
            'anything'  => ['name' => 'Anything', 'link' => '/from/anything']
        ];

        $streamSources[$selectedSource]['selected'] = true;

        return $this->render("TwitchLurkBundle:TwitchLurk:front.html.twig", [
            'title'         => '^.^',
            'javascripts' => ['numbers-only-input'],
            'streamSources' => $streamSources,
            'selectedSource' => $selectedSource
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