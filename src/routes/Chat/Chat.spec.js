import { mount, shallowMount } from '@vue/test-utils'
import Chat  from './Chat.vue';

describe('Chat Service', () => {

    let wrapper = null;
    beforeEach(async() => {
        
        wrapper = mount(Chat, { propsData: {

        }});

    });

    it("should match the snapshot",()=>{

        expect(wrapper.element).toMatchSnapshot();

    });

    it('Should have a list item for every message in the props', () => {
        
        const shallowWrapper = shallowMount(Chat, { propsData: {

            messages:["a message", "another message"]

        }});

        expect(shallowWrapper.findAll(".message-display")).toHaveLength(2);

    })

    

})