<script>
  import { SegmentedControl } from '$components';
</script>

<div class="p-4">
  <SegmentedControl
    options={[
      {
        label: 'Details',
        value: 'details'
      },
      {
        label: 'Price Levels',
        value: 'price_level'
      },
      {
        label: 'Taxes',
        value: 'taxes'
      }
    ]}
    selected={'price_level'}
  />
</div>

<div class="dark bg-black-4 p-4">
  <SegmentedControl
    options={[
      {
        label: 'Details',
        value: 'details'
      },
      {
        label: 'Price Levels',
        value: 'price_level'
      },
      {
        label: 'Taxes',
        value: 'taxes'
      }
    ]}
    selected={'price_level'}
  />
</div>
