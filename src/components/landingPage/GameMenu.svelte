<script>
    import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
    Actions,
    ActionButtons,
    ActionIcons,
} from '@smui/card';
import MenuBtn from './MenuBtn.svelte'
import WorkshopsList from './WorkshopList.svelte';
import ReturnBtn from './ReturnMenuBtn.svelte';
import FaqList from './GameMenuFAQ.svelte';

// import workshops from '../../data/workshopsList';

let showMenu, showWorkshops, showSupport, showFaq;

export let gameData;

</script>


<Card style="min-width: 370px; width: auto; max-width: 760px;  margin: 5px; background-color: {gameData.promo.brandColor}; ">
  <!-- <PrimaryAction on:click={() => clicked++}> -->
    <Media class="card-media-16x9 {showMenu || showWorkshops || showSupport || showFaq ? 'hidden': ''}" aspectRatio="16x9" style="background-image: url({gameData.promo.logo});">
      <MediaContent>

      </MediaContent>
    </Media>
    <Content style="" class="mdc-typography--body2">
        <h2 class="mdc-typography--headline6" style="margin: 0;">
            {gameData.promo.name}
          </h2>
        <h3
        class="mdc-typography--subtitle2 {showMenu ? 'hidden': ''}"
        style="margin: 0 0 10px; color: #888;"
        >
            {gameData.promo.shortDescription}
        </h3>
   
      <div style="display: flex; align-items: center; flex-direction: column;">
        {#if !showMenu & !showWorkshops & !showSupport & !showFaq}
          <Card style='width: 250px; background-color: #191B1B;  height: 80px; margin-bottom: 15px;'>
              <PrimaryAction style="display: flex; align-items: center;" on:click={() => showMenu = !showMenu} padded>
                  <span style="font: 35px 'grafitty';">GAME MENU</span>
              </PrimaryAction>
          </Card>
        {/if}
        {#if showMenu}
          <!-- {#each firstMenuText as menuItem} -->
            <MenuBtn >                        
                <a href='games/{gameData.promo.id}'><span style="font: 40px 'grafitty';  color: #fff;">About ℹ️</span> </a>
            </MenuBtn>
              <MenuBtn  bind:showMenu bind:currentMenu={showWorkshops}>                        
                <span style="font: 40px 'grafitty';  color: #fff;" >Workshops 🧠</span>
            </MenuBtn>
              <MenuBtn  bind:showMenu bind:currentMenu={showFaq}>                        
                <span style="font: 40px 'grafitty';  color: #fff;">FAQ`s ⁉️</span>
            </MenuBtn>
              <MenuBtn bind:showMenu bind:currentMenu={showSupport}>                        
                <span style="font: 40px 'grafitty';  color: #fff;">Support 💙</span>
            </MenuBtn>
          <!-- {/each}  -->
        {/if}
        {#if showWorkshops}
            <!-- <WorkshopsList workshopData={workshops.a}/> -->
            <ReturnBtn bind:showMenu bind:currentMenu={showWorkshops} />  
        {/if}
        {#if showFaq}
            <FaqList faqData={gameData.faq}/>
            <ReturnBtn bind:showMenu bind:currentMenu={showFaq} />  
        {/if}
      </div>
    </Content>
  <!-- </PrimaryAction> -->
</Card>