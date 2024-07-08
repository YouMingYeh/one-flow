import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  nameToIcon,
} from 'ui';

export default function IconSelector({
  onValueChange,
  value,
}: {
  onValueChange: (value: string) => void;
  value: string;
}) {
  return (
    <Select onValueChange={onValueChange} value={value}>
      <SelectTrigger className=''>
        <SelectValue placeholder='Select Icon' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='cat'>{nameToIcon('cat')}</SelectItem>
        <SelectItem value='dog'>{nameToIcon('dog')}</SelectItem>
        <SelectItem value='fish'>{nameToIcon('fish')}</SelectItem>
        <SelectItem value='rabbit'>{nameToIcon('rabbit')}</SelectItem>
        <SelectItem value='snail'>{nameToIcon('snail')}</SelectItem>
        <SelectItem value='turtle'>{nameToIcon('turtle')}</SelectItem>
        <SelectItem value='squirrel'>{nameToIcon('squirrel')}</SelectItem>
        <SelectItem value='bird'>{nameToIcon('bird')}</SelectItem>
        <SelectItem value='bug'>{nameToIcon('bug')}</SelectItem>
        <SelectItem value='rat'>{nameToIcon('rat')}</SelectItem>
        <SelectItem value='egg'>{nameToIcon('egg')}</SelectItem>
      </SelectContent>
    </Select>
  );
}
