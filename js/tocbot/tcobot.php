<?php

namespace Grav\Plugin;

use Grav\Common\Config\Config;
use Grav\Common\Plugin;
use Grav\Common\Uri;
use Grav\Common\Utils;
use RocketTheme\Toolbox\Event\Event;

class CdnAssetPlugin extends Plugin
{
    public function onPluginsInitialized()
    {
        if ($this->isAdmin()) {
            return;
        }

        $this->enable([
            'onTwigSiteVariables' => ['onTwigSiteVariables', 0]
        ]);
    }


    public function onTwigSiteVariables()
    {
        $twig = $this->grav['twig'];
		
		$asset = $this->config->get('plugins.cdn-asset.asset');
		
		if($asset) {
			
		foreach ($asset as $a) {
			
			if ( (!$a['disable']) && ($a['css']) ) { 
				$this->grav['assets']->add($a['css']); 
			}
			
			if ( (!$a['disable']) && ($a['js']) ) { 
			
				if ($a['position']) {
					$postition = ['group' => 'top'];
				} else {
					$postition = ['group' => 'bottom'];
				}
			
				$this->grav['assets']->addJS($a['js'],$position ); }
		}

		}
		
    }
}
