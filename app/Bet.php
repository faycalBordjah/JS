<?php

declare(strict_types=1);


namespace App\Model;


class Bet
{
    private $player;
    /**@var int*/
    private $betAmount;
    /**@var string*/
    private $case;

    public function __construct(PlayerInterface $player,int $betAmount,CaseRoulette $case)
    {
      $betAmount = $this->consoleInteraction->askInt('Combien vous misez ? (en €)');
      $color = $this->consoleInteraction->askText('Sur quelle couleur ?');
      $number = $betAmount = $this->consoleInteraction->askInt('Sur quelle numéro ? (en €)');
    }

    public function getBetAmount(): int
    {
        return $this->betAmount;
    }

    public function getCase(): CaseRoulette
    {
        return $this->case;
    }
}
