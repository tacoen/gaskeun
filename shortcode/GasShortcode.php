<?php
namespace Grav\Plugin\Shortcodes;

use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class GasShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('gas', function(ShortcodeInterface $sc) {
            $class = $sc->getParameter('class', $this->getBbCode($sc));
			//$param = $sc->getParameter('param');
			return '<div markdown="1" class="'.$class.'" data-gas="'.$param.'">'.$sc->getContent().'</div>';
        });
    }
}



