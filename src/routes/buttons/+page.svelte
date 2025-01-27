<script lang="ts">
  import {
    Icons,
    Button,
    IconButton,
    IconLink,
    ActionColors,
    ActionSizes,
    TextButton,
    TextLink,
    Link
  } from '$components';

  const darkMode = [true, false];
  const sizes = [ActionSizes.SMALL, ActionSizes.MEDIUM, ActionSizes.LARGE, ActionSizes.EXTRA_LARGE];
  const colors = [ActionColors.RED, ActionColors.BLUE, ActionColors.NEUTRAL];
  const disabledState = [false, true];
  const loadingState = [false, true];
</script>

<div class="flex min-h-screen w-screen">
  {#each darkMode as dark}
    <div class:dark class:bg-black-4={dark} class="grid w-1/2 grid-cols-4">
      {#each sizes as size}
        {#each colors as color}
          {#each disabledState as disabled}
            {#each loadingState as loading}
              <div>
                <TextButton {loading} {size} {color} {disabled}>Button</TextButton>
              </div>
              <div>
                <TextButton {loading} leftIcon={Icons.CARET_LEFT} {size} {color} {disabled}
                  >Button</TextButton
                >
              </div>
              <div>
                <TextButton {loading} rightIcon={Icons.CARET_RIGHT} {size} {color} {disabled}
                  >Button</TextButton
                >
              </div>
              <div>
                <TextButton
                  {loading}
                  leftIcon={Icons.CARET_LEFT}
                  rightIcon={Icons.CARET_RIGHT}
                  {size}
                  {color}
                  {disabled}>Button</TextButton
                >
              </div>
            {/each}
          {/each}
        {/each}
      {/each}
      {#each sizes as size}
        {#each colors as color}
          <div>
            <TextLink {size} {color}>Link</TextLink>
          </div>
          <div>
            <TextLink leftIcon={Icons.CARET_LEFT} {size} {color}>Link</TextLink>
          </div>
          <div>
            <TextLink rightIcon={Icons.CARET_RIGHT} {size} {color}>Link</TextLink>
          </div>
          <div>
            <TextLink leftIcon={Icons.CARET_LEFT} rightIcon={Icons.CARET_RIGHT} {size} {color}
              >Link</TextLink
            >
          </div>
        {/each}
      {/each}
      {#each sizes as size}
        {#each colors as color}
          {#each disabledState as disabled}
            {#each loadingState as loading}
              <div>
                <Button {loading} {size} {color} {disabled}>Button</Button>
              </div>
              <div>
                <Button {loading} leftIcon={Icons.CARET_LEFT} {size} {color} {disabled}
                  >Button</Button
                >
              </div>
              <div>
                <Button {loading} rightIcon={Icons.CARET_RIGHT} {size} {color} {disabled}
                  >Button</Button
                >
              </div>
              <div>
                <Button
                  {loading}
                  leftIcon={Icons.CARET_LEFT}
                  rightIcon={Icons.CARET_RIGHT}
                  {size}
                  {color}
                  {disabled}>Button</Button
                >
              </div>
            {/each}
          {/each}
        {/each}
      {/each}
      {#each sizes as size}
        {#each colors as color}
          <div>
            <Link {size} {color}>Link</Link>
          </div>
          <div>
            <Link leftIcon={Icons.CARET_LEFT} {size} {color}>Link</Link>
          </div>
          <div>
            <Link rightIcon={Icons.CARET_RIGHT} {size} {color}>Link</Link>
          </div>
          <div>
            <Link leftIcon={Icons.CARET_LEFT} rightIcon={Icons.CARET_RIGHT} {size} {color}
              >Link</Link
            >
          </div>
        {/each}
      {/each}
      {#each sizes as size}
        {#each colors as color}
          {#each disabledState as disabled}
            {#each loadingState as loading}
              <div>
                <IconButton {loading} icon={Icons.CARET_RIGHT} {size} {color} {disabled} />
              </div>
            {/each}
          {/each}
        {/each}
      {/each}
      {#each sizes as size}
        {#each colors as color}
          <div>
            <IconLink icon={Icons.CARET_RIGHT} {size} {color} />
          </div>
        {/each}
      {/each}
    </div>
  {/each}
</div>
